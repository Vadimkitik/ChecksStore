using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChecksStore.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public double Price { get; set; }
        public int Count { get; set; }
    }
}
