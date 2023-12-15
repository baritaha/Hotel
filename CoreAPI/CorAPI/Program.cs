using System;
using System.Diagnostics;
using CorAPI.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;

namespace CorAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = "http://localhost:5277/swagger"; // Replace this with your actual API URL

            var startInfo = new ProcessStartInfo
            {
                FileName = host,
                UseShellExecute = true
            };
            Process.Start(startInfo);

            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddDbContext<CoreAPIContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("constr")));

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
                // Enable CORS
                app.UseCors(builder =>
                {
                    builder.WithOrigins("http://localhost:4200") // Update with your frontend URL
                           .AllowAnyMethod()
                           .AllowAnyHeader();
                });

            }

            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();

            app.Run();
        }

    }
}
