using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChecksStore.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        [EmailAddress (ErrorMessage = "Некорректный адрес")]
        public string Email { get; set; }
        [Required] 
        public string Password { get; set; }
        [Required] 
        public string Name { get; set; }
        [Required]
        public string Telephone { get; set; }
        [Required] 
        public string Address { get; set; }
        public string Role { get; set; }
    }
}
