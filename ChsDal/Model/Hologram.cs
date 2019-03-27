using System;
using System.Collections.Generic;

namespace ChsDal.Model
{
    public partial class Hologram
    {
        public int Id { get; set; }
        public int CelebrityId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string HologramUrl { get; set; }
        public string HologramBin { get; set; }

        public virtual Celebrity Celebrity { get; set; }
    }
}
