using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;
using Umbraco.Core;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace Orc.BannerEditor.Models
{
    public class Banner
    {
        /// <summary>
        /// The headline - Defaults to "Headline" in the property
        /// </summary>
        [JsonProperty("headline")]
        public string Headline { get; set; }

        /// <summary>
        /// The color to display for the Headline in RGBA
        /// </summary>
        [JsonProperty("headlineColor")]
        public string HeadlineColor { get; set; }

        /// <summary>
        /// The height of the desktop banner (either short, mid, or tall)
        /// </summary>
        [JsonProperty("height")]
        public string Height { get; set; }

        /// <summary>
        /// An optional link that can be turned on or off for the banner
        /// </summary>
        [JsonProperty("link")]
        public BannerLink Link { get; set; }

        /// <summary>
        /// The color to display for the Link in RGBA
        /// </summary>
        [JsonProperty("linkColor")]
        public string LinkColor { get; set; }

        /// <summary>
        /// A set of media items for 
        /// </summary>
        [JsonProperty("media")]
        public IEnumerable<BannerMedia> Media { get; set; }

        /// <summary>
        /// The sub-headline - Defaults to "Sub-Headline" in the property
        /// </summary>
        [JsonProperty("subheadline")]
        public string SubHeadline { get; set; }

        /// <summary>
        /// The color to display for the Sub-Headline in RGBA
        /// </summary>
        [JsonProperty("subheadlineColor")]
        public string SubHeadlineColor { get; set; }

        /// <summary>
        /// The position of the property on banner - such as mc for "middle center" or tl for "top left"
        /// </summary>
        [JsonProperty("position")]
        public string Position { get; set; }

        /// <summary>
        /// An optional video. If this is chosen, media could still exist to be used as a poster for the video
        /// or to be displayed as mobile content
        /// </summary>
        [JsonProperty("video")]
        public IPublishedContent Video { get; set; }

        #region Validation

        /// <summary>
        /// Displays false if empty or set to "Headline"
        /// </summary>
        public bool HasHeadline => !Headline.IsNullOrWhiteSpace() && Headline != "Headline";
        public bool HasHeadlineColor => !HeadlineColor.IsNullOrWhiteSpace();
        public bool HasHeight => !Height.IsNullOrWhiteSpace();
        public bool HasLink => Link != null && !Link.Url.IsNullOrWhiteSpace();
        public bool HasLinkColor => !LinkColor.IsNullOrWhiteSpace();
        public bool HasMedia => Media != null && Media.Any(x => x.HasKey && x.Image != null);
        /// <summary>
        /// Displays false if empty or set to "Sub-Headline"
        /// </summary>
        public bool HasSubHeadline => !SubHeadline.IsNullOrWhiteSpace() && SubHeadline != "Sub-Headline";
        public bool HasSubHeadlineColor => !SubHeadlineColor.IsNullOrWhiteSpace();
        public bool HasPosition => !Position.IsNullOrWhiteSpace();
        public bool HasVideo => Video != null && !Video.Url.IsNullOrWhiteSpace();

        #endregion

        public static Banner Deserialize(string json)
        {
            // Validate the JSON
            if (json == null || !json.StartsWith("{") || !json.EndsWith("}"))
            {
                return null;
            }

            // Deserialize the JSON
            var jobj = (JObject)JsonConvert.DeserializeObject(json);
            var videoId = jobj.SelectToken("video").Value<int>("id");

            return new Banner()
            {
                Headline = jobj.Value<string>("headline"),
                HeadlineColor = jobj.Value<string>("headlineColor"),
                Height = jobj.Value<string>("height"),
                Link = jobj.GetValue("link").ToObject<BannerLink>(),
                LinkColor = jobj.Value<string>("linkColor"),
                Media = jobj.GetValue("media") != null ? jobj.Value<JArray>("media").ToObject<List<BannerMedia>>() : null,
                SubHeadline = jobj.Value<string>("subheadline"),
                SubHeadlineColor = jobj.Value<string>("subheadlineColor"),
                Position = jobj.Value<string>("position"),
                Video = videoId != 0 ? UmbracoContext.Current.MediaCache.GetById(videoId) : null
            };
        }
    }
}
