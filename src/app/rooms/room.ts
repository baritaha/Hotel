export interface Room{
totalRoom:number,
availableRooms:number,
bookedRoom:number

}

export interface RoomList{
    roomID:number,
    roomNumber:string,
    roomType:string,
    amenities:string,
    price:number,
    photos:string,
    checkinTime:Date,
    checkoutTime:Date,
    rating:number
}