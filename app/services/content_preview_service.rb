class ContentPreviewService
  attr_reader :url
  def initialize(url)
    @url = url
  end

  def get_preview_json
    youtube_version
  end

  def youtube_version
    image = YouTubeRails.extract_video_image( url )
    em_code = YouTubeRails.youtube_embed_url( url , 220, 115)
    data =  {
      image_url: image,
      url: url,
      embed_html: em_code, 
      source: "youtube"
    }.to_json
  end

  
end