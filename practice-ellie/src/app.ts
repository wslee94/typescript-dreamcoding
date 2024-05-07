import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/page/page.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Component } from "./components/component.js";
import {
  InputDialog,
  MediaData,
  TextData,
} from "./components/dialog/dialog.js";

type InputComponentConstructor<T extends (MediaData | TextData) & Component> = {
  new (): T;
};

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent); // 생성자를 인자로 넘김 (SectionContainer를 구현 한 어떤 클래스도 대입 가능!, 매우 유연한 구조)
    this.page.attachTo(appRoot);

    // url: https://picsum.photos/600/300
    this.bindElementToDialog<MediaSectionInput>(
      "#new-image",
      MediaSectionInput,
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
    );

    this.bindElementToDialog<MediaSectionInput>(
      "#new-video",
      MediaSectionInput,
      (input: MediaSectionInput) => new VideoComponent(input.title, input.url)
    );

    this.bindElementToDialog<TextSectionInput>(
      "#new-note",
      TextSectionInput,
      (input: TextSectionInput) => new NoteComponent(input.title, input.body)
    );

    this.bindElementToDialog<TextSectionInput>(
      "#new-todo",
      TextSectionInput,
      (input: TextSectionInput) => new TodoComponent(input.title, input.body)
    );

    this.page.addChild(
      new ImageComponent("Image Title", "https://picsum.photos/800/400")
    );
    this.page.addChild(
      new VideoComponent(
        "Video Title",
        "https://www.youtube.com/watch?v=DgEau4mRysA"
      )
    );
    this.page.addChild(
      new NoteComponent("Note Title", "Don't forget to code your dream")
    );
    this.page.addChild(new TodoComponent("Todo Title", "TypeScript Course!"));
    this.page.addChild(
      new ImageComponent("Image Title", "https://picsum.photos/800/400")
    );
    this.page.addChild(
      new VideoComponent(
        "Video Title",
        "https://www.youtube.com/watch?v=DgEau4mRysA"
      )
    );
    this.page.addChild(
      new NoteComponent("Note Title", "Don't forget to code your dream")
    );
    this.page.addChild(new TodoComponent("Todo Title", "TypeScript Course!"));
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener("click", () => {
      const dialog = new InputDialog();
      const input = new InputComponent();
      dialog.addChild(input);

      // 이벤트는 사용하는 측에서 정의하도록 해야 재사용성이 높아진다.
      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });

      dialog.setOnSubmitListener(() => {
        const section = makeSection(input);
        this.page.addChild(section);
        dialog.removeFrom(this.dialogRoot);
      });

      dialog.attachTo(this.dialogRoot);
    });
  }
}

new App(document.querySelector(".document")! as HTMLElement, document.body);
