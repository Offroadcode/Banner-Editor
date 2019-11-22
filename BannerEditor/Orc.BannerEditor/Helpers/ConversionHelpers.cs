using System;
using System.Collections.Generic;
using System.Linq;

namespace Orc.BannerEditor.Helpers
{
    public class ConversionHelpers
    {
        public static string RoundColorNumber(string rgbaValue)
        {
            var roundedRgbaValues = string.Empty;

            if (!string.IsNullOrEmpty(rgbaValue))
            {
                var values = rgbaValue.Split(',').ToList();
                var parsedValues = new List<string>();
                var opacity = "1";
                foreach (var value in values.Take(3))
                {
                    if (double.TryParse(value, out var parsedValue))
                    {
                        var roundedValue = Math.Round(parsedValue, 0);
                        parsedValues.Add(roundedValue.ToString());
                    }
                }

                if (values.Count > 3)
                {
                    opacity = values[3];
                    if (decimal.TryParse(opacity, out var parsedOpacity))
                    {
                        opacity = parsedOpacity.ToString("F1");
                    }
                }

                parsedValues.Add(opacity);
                roundedRgbaValues = string.Join(",", parsedValues);
            }

            return roundedRgbaValues;
        }
    }
}
