const CustomVideoCard = ({
  thumbnail,
  title,
  roleLabel = 'Roles Anda dalam video:',
  badgeText,
}) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded bg-white w-fit">
      {/* Thumbnail 16:9 */}
      <div className="w-[160px] h-[90px] rounded overflow-hidden flex items-center justify-center bg-white border">
        {thumbnail || (
          <img
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            alt="YouTube Thumbnail"
            className="w-10"
          />
        )}
      </div>

      {/* Konten kanan */}
      <div className="flex flex-col text-left justify-between h-[90px] py-0.5">
        {/* Title */}
        <h2 className="text-[18px] font-semibold text-[#2D2D2D] leading-snug mb-[8px]">
          {title}
        </h2>

        {/* Role + Badge */}
        <div className="mt-auto">
          <p className="text-[12px] text-[#6B6B6B]">{roleLabel}</p>
          <div className="inline-flex items-center mt-1 px-2 py-0.5 rounded-full text-[12px] font-semibold text-[#ED2B2A] bg-[#FFEAEA] w-fit">
            <span className="mr-1 text-[16px] leading-none">•</span>
            {badgeText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoCard;
