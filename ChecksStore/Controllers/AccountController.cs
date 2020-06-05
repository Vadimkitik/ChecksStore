using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using ChecksStore.Models;
using Microsoft.AspNetCore.Http;

namespace ChecksStore.Controllers
{
    [ApiController]
    [Route("api/authentification")]
    public class AccountController : Controller
    {
        private ApplicationContext db;
        public AccountController(ApplicationContext context)
        {
            db = context;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult<LoginModel>> Login(LoginModel model)
        {
            if (ModelState.IsValid)
            {
                User user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email && u.Password == model.Password);
                if (user != null)
                {
                    return Ok(model);
                }
                ModelState.AddModelError("", "Некорректные логин и(или) пароль");
            }
            return model;
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult<RegisterModel>> Register(RegisterModel model)
        {
            if (ModelState.IsValid)
            {
                User user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
                if (user == null)
                {
                    // добавляем пользователя в бд
                    db.Users.Add(new User { Email = model.Email, Password = model.Password });
                    await db.SaveChangesAsync();

                    return Ok(model);
                }
                else
                    ModelState.AddModelError("", "Некорректные логин и(или) пароль");
            }
            return model;
        }
    }
}
