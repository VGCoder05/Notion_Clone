import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Delimiter from "./CustomDelimiter";
// import Warning from '@editorjs/warning';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import Table from '@editorjs/table';
import ImageTool from '@editorjs/image';
import LinkTool from "./LinkTool";
import CodeFlaskTool from '@calumk/editorjs-codeflask';
// import CodeTool from '@editorjs/code';
import AttachesTool from './Attachment';
// import AttachesTool from '@editorjs/attaches';
import Paragraph from '@editorjs/paragraph';
import InternalPageLink from './PgLink';


const tools = {
  header: {
    class: Header,
    inlineToolbar: true,
    config: {
      levels: [1, 2, 3],
      defaultLevel: 2
    },
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  internalPageLink: InternalPageLink,
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: "Enter a quote",
      captionPlaceholder: "Quote’s author",
    },
  },
  delimiter: Delimiter,
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
      uploader: {
        async uploadByFile(file) {
          const base64 = await toBase64(file);
          return {
            success: 1,
            file: {
              url: base64,
            },
          };
        },
        async uploadByUrl(url) {
          return {
            success: 1,
            file: {
              url,
            },
          };
        },
      },
    },
    // config: {
    //   endpoints: {
    //     byFile: "http://localhost:8008/uploadFile", // file upload endpoint
    //     byUrl: "http://localhost:8008/fetchUrl", // URL-based upload
    //   },
    // },
  },
  linkTool: LinkTool,
  code: {
    class: CodeFlaskTool,
    toolbox: {
      title: "Code",
      icon: '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zM14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>',
    },
    config: {
      language: "js",
      theme: "okaidia", // theme is handled by the imported CSS
    },
  },
  inlineToolbar: false,
  attaches: {
    class: AttachesTool,
    // config: {
    //   endpoint: "http://localhost:8008/uploadFile", // file attachment endpoint
    // },
  },
  // placeholder: "Type / to use options",
};

    // helper function for image
    function toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }

export default tools;