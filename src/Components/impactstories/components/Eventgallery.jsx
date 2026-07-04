const gallery = [
  {
    type: "image",
    url: "/gallery/event1.jpg",
  },
  {
    type: "image",
    url: "/gallery/event2.jpg",
  },
  {
    type: "video",
    url: "/gallery/event.mp4",
  },
];
<div className="grid md:grid-cols-3 gap-6">
  {gallery.map((item, i) => (
    <div
      key={i}
      className="
      overflow-hidden
      rounded-3xl
      group
    "
    >
      {item.type === "image" ? (
        <img
          src={item.url}
          alt=""
          className="
          h-72
          w-full
          object-cover
          transition
          duration-700
          group-hover:scale-110
        "
        />
      ) : (
        <video
          controls
          className="
          h-72
          w-full
          object-cover
        "
        >
          <source src={item.url} />
        </video>
      )}
    </div>
  ))}
</div>