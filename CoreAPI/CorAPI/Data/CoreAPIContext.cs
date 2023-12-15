using Microsoft.EntityFrameworkCore;


namespace CorAPI.Models{
    public class CoreAPIContext:DbContext
    {
        public CoreAPIContext(DbContextOptions options):base(options)
        {
            
        }
       public DbSet<Info> infos { get; set; }
    }

    
}