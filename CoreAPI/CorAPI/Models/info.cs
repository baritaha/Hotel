using System.ComponentModel.DataAnnotations;
namespace CorAPI.Models{
public class Info
{
    [Key]
    public int roomID { get; set; }
    public int RoomNumber { get; set; }=0;
    public string RoomType { get; set; }="";
    public string Amenities { get; set; }="";
    public int Price { get; set; }=0;
    public string Photos { get; set; }="";
    public DateTime CheckinTime { get; set; }=DateTime.Now;
    public DateTime CheckoutTime { get; set; }=DateTime.Now;
    public int Rating { get; set; }=0;
}
}