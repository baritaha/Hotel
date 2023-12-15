using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CorAPI.Models;

namespace CorAPI
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomsController : ControllerBase
    {
        private readonly CoreAPIContext _context;

        public RoomsController(CoreAPIContext context)
        {
            _context = context;
        }

        // GET: api/Rooms
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Info>>> Getinfos()
        {
          if (_context.infos == null)
          {
              return NotFound();
          }
            return await _context.infos.ToListAsync();
        }

        // GET: api/Rooms/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Info>> GetInfo(int id)
        {
          if (_context.infos == null)
          {
              return NotFound();
          }
            var info = await _context.infos.FindAsync(id);

            if (info == null)
            {
                return NotFound();
            }

            return info;
        }

        // PUT: api/Rooms/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInfo(int id, Info info)
        {
            if (id != info.roomID)
            {
                return BadRequest();
            }

            _context.Entry(info).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InfoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Rooms
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Info>> PostInfo(Info info)
        {
          if (_context.infos == null)
          {
              return Problem("Entity set 'CoreAPIContext.infos'  is null.");
          }
            _context.infos.Add(info);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInfo", new { id = info.roomID }, info);
        }

        // DELETE: api/Rooms/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInfo(int id)
        {
            if (_context.infos == null)
            {
                return NotFound();
            }
            var info = await _context.infos.FindAsync(id);
            if (info == null)
            {
                return NotFound();
            }

            _context.infos.Remove(info);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InfoExists(int id)
        {
            return (_context.infos?.Any(e => e.roomID == id)).GetValueOrDefault();
        }
    }
}
