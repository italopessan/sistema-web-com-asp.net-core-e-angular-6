using CursosApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CursosApi.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
         : base(options)
        {
        }
        public DbSet<Escola> cursos { get; set; }
    }
}
