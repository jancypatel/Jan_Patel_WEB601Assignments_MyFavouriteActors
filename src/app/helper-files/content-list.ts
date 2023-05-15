import { Content } from './content-interface';

export class ContentList {
  private contents: Content[];

  constructor() {
    this.contents = [];
  }

  get contentList(): Content[] {
    return this.contents;
  }

  add(content: Content): void {
    this.contents.push(content);
  }

  get length(): number {
    return this.contents.length;
  }

  getContentHTML(index: number): string {
    const content = this.contents[index];
    const imgTag = `<img src="${content.imgUrl}" alt="${content.title}">`;
    return `
      <h2>${content.title}</h2>
      <p>${content.description}</p>
      <p>Creator: ${content.creator}</p>
      <p>Type: ${content.type}</p>
      ${imgTag}
    `;
  }
}