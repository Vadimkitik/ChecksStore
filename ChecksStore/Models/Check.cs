using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChecksStore.Models
{
    public class Check
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public double Price { get; set; }
    }
}
