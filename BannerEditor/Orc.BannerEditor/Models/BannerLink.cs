using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Umbraco.Core;

namespace Orc.BannerEditor.Models
{
    public class BannerLink
    {
        /// <summary>
        /// The Umbraco Node Id if this link is internal
        /// </summary>
        [JsonProperty("id")]
        public int? Id { get; set; }

        /// <summary>
        /// The display text for the link
        /// </summary>
        [JsonProperty("name")]
        public string Name { get; set; }

        /// <summary>
        /// The target - defaults to _self
        /// </summary>
        [JsonProperty("target")]
        public string Target { get; set; }

        /// <summary>
        /// The link's URL (this should always exist!)
        /// </summary>
        [JsonProperty("url")]
        public string Url { get; set; }

        #region Validation

        public bool HasId => Id.HasValue;
        public bool HasName => !Name.IsNullOrWhiteSpace();
        public bool HasTarget => !Target.IsNullOrWhiteSpace();
        public bool HasUrl => !Url.IsNullOrWhiteSpace();

        #endregion

        /// <summary>
        /// Deserializes the link into a <see cref="BannerLink"/> for use in the <see cref="Banner"/>
        /// </summary>
        /// <param name="json">The link's json string to deserialize</param>
        /// <returns>Our <see cref="BannerLink"/> model.</returns>
        public static BannerLink Deserialize(string json)
        {
            // Validate the JSON
            if (json == null || !json.StartsWith("{") || !json.EndsWith("}"))
            {
                return null;
            }

            // Deserialize the JSON
            var jobj = (JProperty)JsonConvert.DeserializeObject(json);
            return new BannerLink
            {
                Id = (int?)jobj.Value["id"],
                Name = (string)jobj.Value["name"],
                Target = (string)jobj.Value["target"],
                Url = (string)jobj.Value["url"]
            };

        }
    }
}
