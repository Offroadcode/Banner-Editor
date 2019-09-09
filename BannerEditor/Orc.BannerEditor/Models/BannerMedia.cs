using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Umbraco.Core;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace Orc.BannerEditor.Models
{
    public class BannerMedia
    {
        /// <summary>
        /// The key for the image - "desktop", "tablet", or "mobile"
        /// </summary>
        [JsonProperty("key")]
        public string Key { get; set; }

        /// <summary>
        /// The Umbraco media item
        /// </summary>
        [JsonIgnore]
        public IPublishedContent Image { get; set; }

        #region Validation

        public bool HasKey => !Key.IsNullOrWhiteSpace();
        public bool HasImage => Image != null && !Image.Url.IsNullOrWhiteSpace();

        #endregion

        /// <summary>
        /// Deserializes the media into an Umbraco media item and the key for the front-end
        /// </summary>
        /// <param name="json"></param>
        /// <returns>
        /// A <see cref="BannerMedia"/> item that holds a key and an <see cref="IPublishedContent"/> Image
        /// </returns>
        public static BannerMedia Deserialize(string json)
        {
            // Validate the JSON
            if (json == null || !json.StartsWith("{") || !json.EndsWith("}"))
            {
                return null;
            }

            // Deserialize the JSON
            var jobj = (JProperty)JsonConvert.DeserializeObject(json);
            var mediaId = jobj.Value<int>("id");

            return new BannerMedia
            {
                Key = (string)jobj.Value["key"],
                Image = mediaId != 0 ? UmbracoContext.Current.MediaCache.GetById(mediaId) : null
            };
        }
    }
}
