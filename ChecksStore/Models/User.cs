using System.ComponentModel.DataAnnotations;

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
        [Required] 
        public string Role { get; set; }
    }
}
