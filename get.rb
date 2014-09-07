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
File.open("data.json", 'w'){ |file|
  file.write("{\n")
  data.each do |elem|
    file.write("\t#{elem.to_json},\n")
  end
  file.write("}\n")
}

