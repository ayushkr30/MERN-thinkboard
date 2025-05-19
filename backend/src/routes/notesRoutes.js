import express, { Router } from "express";
import { createNote, deleteNote, getAllNotes, updateNotes } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getAllNotes);
router.post("/", createNote);

router.put("/:id", updateNotes);

router.delete("/:id", deleteNote);


export default router;

