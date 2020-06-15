using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using ChecksStore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System;
using System.Text;

namespace ChecksStore.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]LoginModel user)
        {
            if (user == null)
            {
                return BadRequest("Invalid client request");
            }
 
            if (user.Email == "john@doe" && user.Password == "def@123")
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
 
                var tokeOptions = new JwtSecurityToken(
                issuer: "http://localhost:5000",
                audience: "http://localhost:5000",
                claims: new List<Claim>(),
                expires: DateTime.Now.AddMinutes(5),
                signingCredentials: signinCredentials
            );
 
                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = tokenString });
            }
            else
            {
            return Unauthorized();
            }
        }
        // private ApplicationContext db;
        // public AuthController(ApplicationContext context)
        // {
        //     db = context;
        // }

        // [HttpPost]
        // [ValidateAntiForgeryToken]
        // public async Task<ActionResult<LoginModel>> Login(LoginModel model)
        // {
        //     if (ModelState.IsValid)
        //     {
        //         User user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email && u.Password == model.Password);
        //         if (user != null)
        //         {
        //             return Ok(model);
        //         }
        //         ModelState.AddModelError("", "Некорректные логин и(или) пароль");
        //     }
        //     return model;
        // }


        // [HttpPost]
        // [ValidateAntiForgeryToken]
        // public async Task<ActionResult<RegisterModel>> Register(RegisterModel model)
        // {
        //     if (ModelState.IsValid)
        //     {
        //         User user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
        //         if (user == null)
        //         {
        //             // добавляем пользователя в бд
        //             db.Users.Add(new User { Email = model.Email, Password = model.Password });
        //             await db.SaveChangesAsync();

        //             return Ok(model);
        //         }
        //         else
        //             ModelState.AddModelError("", "Некорректные логин и(или) пароль");
        //     }
        //     return model;
        // }
    }
}
