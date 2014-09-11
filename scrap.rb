require 'mechanize'
require 'json'

# CONFIG variables
source_url = 'http://www.therapboard.com'

mechanize = Mechanize.new {|agent|
  agent.user_agent = 'Mac Safari'
}


# Mechanize target html
file_path = 'file://localhost/Users/EV/Desktop/rapboard/source.html'
page = mechanize.get("#{file_path}")

# Fill data with json
data = []
page.search('audio').each do |audio|
  artist = audio['title']
  src = audio.at('source')['src']
  data << {artist: artist, track: source_url + '/' + src }
end


# Write to data.json
File.open("app/srcs/data.json", 'w'){ |file|
  file.write("{\n")
  data.each do |elem|
    file.write("\t#{elem.to_json},\n")
  end
  file.write("}\n")
}

# # Download audio files
# file = File.read 'app/data.json'
# data = JSON.parse(file)
# agent = Mechanize.new
# agent.pluggable_parser.default = Mechanize::Download

# data['content'].each do |a|
#   path = a['track']
#   agent.get(path).save("srcs#{path}")
# end

