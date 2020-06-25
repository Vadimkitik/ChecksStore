using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ChecksStore.Models;
using Microsoft.AspNetCore.Authorization;

namespace ChecksStore.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductController : Controller
    {
        private readonly ApplicationContext db;

        public ProductController(ApplicationContext context)
        {
            db = context;

            if (!db.Products.Any())
            {
                var rnd = new Random();
                for (int i = 1; i <= 15; i++)
                {
                    db.Products.Add(new Product { Name = "Check-"+i, Type = "Цветы", Price = rnd.Next(3, 15), Count = rnd.Next(10,50) }); 
                }
                db.SaveChanges();
            }
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> Get()
        {
            return await db.Products.ToListAsync();
        }

        [HttpGet("{id}"),Authorize(Roles = "Admin")]
        public async Task<ActionResult<Product>> Get(int id)
        {
            Product product = await db.Products.FirstOrDefaultAsync(p => p.Id == id);

            if (product != null)
            {
                return product;                
            }
            return NotFound();            
        }

        [HttpPost,Authorize(Roles = "Admin")]
        public async Task<IActionResult> Post(Product product)
        {
            if (ModelState.IsValid)
            {
                db.Products.Add(product);
                await db.SaveChangesAsync();
                return Ok(product);
            }
            return BadRequest(ModelState);
        }

        [HttpPut,Authorize(Roles = "Admin")]
        public async Task<IActionResult> Put(Product product)
        {
            if (ModelState.IsValid)
            {
                db.Update(product);
                await db.SaveChangesAsync();
                return Ok(product);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}"),Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete(int id)
        {
            Product product = await db.Products.FirstOrDefaultAsync(p => p.Id == id);
            if (product != null)
            {
                db.Products.Remove(product);
                await db.SaveChangesAsync();
                return Ok(product);
            }            
            return NotFound();
        }
    }
}
