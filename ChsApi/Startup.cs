using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace ChsApi
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    readonly string _allowSpecificOriginsPlicyName = "_someName 'Enable Cross-Origin Requests (CORS) in ASP.NET Core'"; // see more at https://docs.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-2.2

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddCors(options =>
      {
        options.AddPolicy(
          _allowSpecificOriginsPlicyName,
          builder =>
          {
            builder.WithOrigins("http://localHost:4200");
          });
      });

      services.AddMvc()
          .AddNewtonsoftJson();

      /// In a real application you would typically put the connection string in a configuration file or environment variable. 
      /// For the sake of simplicity, this tutorial has you define it in code. For more information, see 
      /// https://docs.microsoft.com/en-us/ef/core/miscellaneous/connection-strings
      const string connection = @"Server=.\sqlexpress;Database=ChsDbs;Trusted_Connection=True;ConnectRetryCount=0";
      services.AddDbContext<ChsDal.Model.ChsDbsContext>(options => options.UseSqlServer(connection));
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      else
      {
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
      }

      app.UseCors(_allowSpecificOriginsPlicyName);

      app.UseHttpsRedirection();

      app.UseRouting(//routes => { routes.MapControllers(); } <= not like that in the latest code gen on new app. Jul 2019.
        );

      app.UseAuthorization();
    }
  }
}
/*
  For more information, see 
  Getting Started with EF Core on ASP.NET Core with an Existing Database
  https://docs.microsoft.com/en-us/ef/core/get-started/aspnetcore/existing-db

  Scaffold-DbContext "Server=.\sqlexpress;Database=ChsDbs;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Model
*/
