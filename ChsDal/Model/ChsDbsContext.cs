using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ChsDal.Model
{
    public partial class ChsDbsContext : DbContext
    {
        public ChsDbsContext()
        {
        }

        public ChsDbsContext(DbContextOptions<ChsDbsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Celebrity> Celebrity { get; set; }
        public virtual DbSet<Hologram> Hologram { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=.\\sqlexpress;Database=ChsDbs;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.3-servicing-35854");

            modelBuilder.Entity<Celebrity>(entity =>
            {
                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(64);

                entity.Property(e => e.HologramBin).HasColumnType("ntext");

                entity.Property(e => e.HologramUrl).HasMaxLength(256);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(64);
            });

            modelBuilder.Entity<Hologram>(entity =>
            {
                entity.Property(e => e.Description).HasMaxLength(1024);

                entity.Property(e => e.HologramBin).HasColumnType("ntext");

                entity.Property(e => e.HologramUrl).HasMaxLength(256);

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(64);

                entity.HasOne(d => d.Celebrity)
                    .WithMany(p => p.Hologram)
                    .HasForeignKey(d => d.CelebrityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Hologram_Celebrity");
            });
        }
    }
}
