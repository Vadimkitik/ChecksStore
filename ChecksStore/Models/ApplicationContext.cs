﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ChecksStore.Models
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext (DbContextOptions<ApplicationContext> options)
            :base(options)
        {
           Database.EnsureCreated();
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
