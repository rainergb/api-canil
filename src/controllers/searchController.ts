import { Request, Response} from 'express';
import { Pet } from "../models/pets";

export const search = (req: Request, res: Response) => {
  let query = req.query.q as string;

  if (!query) {
    return res.redirect("/");
  }

  let list = Pet.getByName(query);

  if (list.length === 0) {
    return res.render("pages/404", {
      searchQuery: query
    });
  }

  res.render("pages/index", {
    banner: {
      title: `Resultados para "${query}"`,
      background: "all-animals.png"
    },
    list,
    searchQuery: query
  });
};