import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Delimiter from '@editorjs/delimiter';
import Warning from '@editorjs/warning';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import Table from '@editorjs/table';
import ImageTool from '@editorjs/image';
import LinkTool from '@editorjs/link';
import CodeTool from '@editorjs/code';
import AttachesTool from '@editorjs/attaches';
import Paragraph from '@editorjs/paragraph';


const tools = {
  header: {
    class: Header,
    inlineToolbar: true,
  },  
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: 'Enter a quote',
      captionPlaceholder: 'Quote’s author',
    },
  },
  delimiter: Delimiter,
  warning: {
    class: Warning,
    inlineToolbar: true,
    config: {
      titlePlaceholder: 'Title',
      messagePlaceholder: 'Message',
    },
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  checklist: {
    class: Checklist,
    inlineToolbar: true,
  },
  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3,
    },
  },
  image: {
    class: ImageTool,
    inlineToolbar: true,
    config: {
      endpoints: {
        byFile: 'http://localhost:8008/uploadFile', // file upload endpoint
        byUrl: 'http://localhost:8008/fetchUrl', // URL-based upload
      },
    },
  },
  linkTool: {
    class: LinkTool,
    config: {
      endpoint: 'http://localhost:8008/fetchUrl', // link metadata fetcher
    },
  },
  code: {
    class: CodeTool,
    inlineToolbar: false,
  },
  attaches: {
    class: AttachesTool,
    config: {
      endpoint: 'http://localhost:8008/uploadFile', // file attachment endpoint
    },
  },
};

export default tools;