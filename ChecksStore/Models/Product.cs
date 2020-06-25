using System.ComponentModel.DataAnnotations;

namespace ChecksStore.Models
{
    public class Product
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        public double Price { get; set; }
        public int Count { get; set; }
    }
}
