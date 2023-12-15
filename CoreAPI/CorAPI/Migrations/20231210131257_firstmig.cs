using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CorAPI.Migrations
{
    /// <inheritdoc />
    public partial class firstmig : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "infos",
                columns: table => new
                {
                    roomID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoomNumber = table.Column<int>(type: "int", nullable: false),
                    RoomType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Amenities = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<int>(type: "int", nullable: false),
                    Photos = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CheckinTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CheckoutTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Rating = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_infos", x => x.roomID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "infos");
        }
    }
}
