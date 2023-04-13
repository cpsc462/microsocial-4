import express from 'express'
import { createPost, getAllPosts, getPostById, getPostByUsername } from '../controllers/post.js'

const router = express.Router()

/**
 * @swagger
 * /content/posts:
 *   get:
 *     summary: Get all Posts!
 *     description: Get all posts in database.
 *     tags: [Content API]
 *     responses:
 *       200:
 *         description: Post route text
 */
router.get('/', getAllPosts)

/**
 * @swagger
 * /content/posts/{post_id}:
 *   get:
 *     summary: Get all Posts!
 *     description: Get a post by id
 *     parameters:
 *       - name: post_id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     tags: [Content API]
 *     responses:
 *       200:
 *         description: Post route text
 */
router.get('/:post_id', getPostById)

/**
 * @swagger
 * /content/posts/user/{username}:
 *   get:
 *     summary: Get post by username!
 *     description: Get a post by a username
 *     parameters:
 *       - name: username
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     tags: [Content API]
 *     responses:
 *       200:
 *         description: Post route text
 */
router.get('/user/:username', getPostByUsername)

/**
 * @swagger
 * /content/posts:
 *   post:
 *     summary: Post a new post!
 *     description: Post a post.
 *     tags: [Content API]
 *     requestBody:
 *       required: ture
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               title:
 *                 type: string
 *               tags:
 *                 type: string
 *               image:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Post created successfully
 *       400:
 *         description: Invalid input data
 */
router.post('/', createPost)


export default router