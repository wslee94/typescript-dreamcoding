import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
      <section class="video">
        <div class="video__player">
          <iframe class="video__iframe"></iframe>
        </div>
        <h3 class="page-item__title video__title"></h3>
      </section>
      `);

    const iframe = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;
    iframe.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  // input
  // https://www.youtube.com/watch?v=K3-jG52XwuQ
  // https://youtu.be/K3-jG52XwuQ
  // output
  // https://www.youtube.com/embed/K3-jG52XwuQ
  // 정규표현식 Regex
  // https://regexr.com/5l6nr
  private convertToEmbeddedURL(url: string) {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    console.log(match);
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}

// <iframe
//   width="560"
//   height="315"
//   src="https://www.youtube.com/embed/C_KhnrekvMc?si=_MqjcBAbkj-fBt3T"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//   referrerpolicy="strict-origin-when-cross-origin"
//   allowfullscreen
// ></iframe>;
