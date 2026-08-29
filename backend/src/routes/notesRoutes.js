import express from "express";
import {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
} from "../controllers/notesController.js";

import rateLimiter from "../middleware/rateLimiter.js";

const router = express.Router();

router.get("/", rateLimiter, getAllNotes);
router.get("/:id", rateLimiter, getNoteById);
router.post("/", rateLimiter, createNote);
router.put("/:id", rateLimiter, updateNote);
router.delete("/:id", rateLimiter, deleteNote);

export default router;