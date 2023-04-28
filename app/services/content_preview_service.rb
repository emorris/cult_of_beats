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
    em_code = YouTubeRails.youtube_embed_url( url , 420, 315)
    data =  {image_url: image, embed_html: em_code}.to_json
  end
end