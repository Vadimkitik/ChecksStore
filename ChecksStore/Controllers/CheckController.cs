using ChecksStore.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChecksStore.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class CheckController : Controller
    {
        ApplicationContext db;
        public CheckController(ApplicationContext context)
        {
            db = context;
            if (!db.Checks.Any())
            {
                var rnd = new Random();
                for (int i = 0; i < 15; i++)
                {
                    db.Checks.Add(new Check { Name = "Check-"+i, Date = new DateTime(2020, 4, rnd.Next(1,5), rnd.Next(9, 19), rnd.Next(0, 59), rnd.Next(0, 59)), Price = rnd.Next(3, 15) }); 
                }
                db.SaveChanges();
            }
        }
        [HttpGet]
        public IEnumerable<Check> Get()
        {
            return db.Checks.ToList();
        }

        [HttpGet("{id}")]
        public Check Get(int id)
        {
            Check check = db.Checks.FirstOrDefault(x => x.Id == id);
            return check;
        }

        [HttpPost]
        public IActionResult Post(Check check)
        {
            if (ModelState.IsValid)
            {
                db.Checks.Add(check);
                db.SaveChanges();
                return Ok(check);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Check check)
        {
            if (ModelState.IsValid)
            {
                db.Update(check);
                db.SaveChanges();
                return Ok(check);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Check check = db.Checks.FirstOrDefault(x => x.Id == id);
            if (check != null)
            {
                db.Checks.Remove(check);
                db.SaveChanges();
            }
            return Ok(check);
        }
    }
}
