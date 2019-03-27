using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ChsDal.Model;

namespace ChsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CelebritiesController : ControllerBase
    {
        private readonly ChsDbsContext _context;

        public CelebritiesController(ChsDbsContext context)
        {
            _context = context;
        }

        // GET: api/Celebrities
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Celebrity>>> GetCelebrity()
        {
            return await _context.Celebrity.ToListAsync();
        }

        // GET: api/Celebrities/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Celebrity>> GetCelebrity(int id)
        {
            var celebrity = await _context.Celebrity.FindAsync(id);

            if (celebrity == null)
            {
                return NotFound();
            }

            return celebrity;
        }

        // PUT: api/Celebrities/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCelebrity(int id, Celebrity celebrity)
        {
            if (id != celebrity.Id)
            {
                return BadRequest();
            }

            _context.Entry(celebrity).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CelebrityExists(id))
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

        // POST: api/Celebrities
        [HttpPost]
        public async Task<ActionResult<Celebrity>> PostCelebrity(Celebrity celebrity)
        {
            _context.Celebrity.Add(celebrity);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCelebrity", new { id = celebrity.Id }, celebrity);
        }

        // DELETE: api/Celebrities/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Celebrity>> DeleteCelebrity(int id)
        {
            var celebrity = await _context.Celebrity.FindAsync(id);
            if (celebrity == null)
            {
                return NotFound();
            }

            _context.Celebrity.Remove(celebrity);
            await _context.SaveChangesAsync();

            return celebrity;
        }

        private bool CelebrityExists(int id)
        {
            return _context.Celebrity.Any(e => e.Id == id);
        }
    }
}
