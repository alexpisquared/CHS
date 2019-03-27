using System;
using System.Collections.Generic;

namespace ChsDal.Model
{
    public partial class Celebrity
    {
        public Celebrity()
        {
            Hologram = new HashSet<Hologram>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string HologramUrl { get; set; }
        public string HologramBin { get; set; }

        public virtual ICollection<Hologram> Hologram { get; set; }
    }
}
