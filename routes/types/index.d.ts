declare module "nixix/router" {
  interface RouteLink<T extends GenRoutePath> {
    to: GenRoutePath;
  }

  interface FormActionProps {
    action: GenRoutePath;
  }
};

export type GenRoutePath = `/` | `/profiles/` | `/chats/` |  `/chats/${string}/profile` | `/chats/${string}/`;
