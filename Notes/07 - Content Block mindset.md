Okay, building a Notion-like app is an ambitious and exciting project! It's a marathon, not a sprint. Here's a mindset guide to help you tackle it effectively:

1.  **Embrace Iteration: Start Small, Grow Incrementally**
    *   **Don't try to build all of Notion at once.** That's a recipe for overwhelm and burnout.
    *   **Your first goal:** Get *one* basic block type working on *one* page. Maybe just a paragraph block where you can type text and it saves.
    *   **Next goal:** Add a second block type (e.g., a heading). Then, make them reorderable.
    *   Each small success will build momentum and confidence.

2.  **Focus on the Core: Blocks are Everything**
    *   The "block" is the fundamental atom of your application. Think deeply about what a block *is* and what it *does*.
    *   Your data structure for blocks needs to be flexible enough to accommodate various types but consistent enough to manage.
    *   Every feature you consider, ask: "How does this relate to blocks?"

3.  **Data Structure is King (You're on the Right Track!)**
    *   The way you structure your data will profoundly impact how easy (or hard) it is to build features.
    *   Think about:
        *   How will you add a block?
        *   How will you delete a block?
        *   How will you update a block's content?
        *   How will you reorder blocks?
        *   How will you change a block's type?
    *   Good data structure makes these operations logical. Poor structure makes them a nightmare.
    *   Normalization (as discussed earlier) becomes very important as your app grows. Don't be afraid to refactor your state shape as you learn.

4.  **Component-Based Thinking (React's Strength)**
    *   Each block type can be its own React component (`ParagraphBlock`, `HeadingBlock`, `ImageBlock`).
    *   Your `PageDisplay` component will be a container that maps over your `blocks` data and renders the appropriate block component using a `BlockRenderer`.
    *   This modularity makes your codebase manageable.

5.  **Redux for Predictable State Management**
    *   Redux will be your "single source of truth." All changes to pages and blocks should go through Redux actions and reducers.
    *   This makes debugging easier and your application state predictable.
    *   **Think in terms of events/actions:** `USER_ADDED_NEW_PARAGRAPH_BLOCK`, `USER_UPDATED_BLOCK_CONTENT`, `USER_REORDERED_BLOCKS`.

6.  **Patience and Persistence**
    *   You *will* hit roadblocks. You *will* write code that you later refactor or throw away. This is normal.
    *   When you get stuck, take a break. Explain the problem to a rubber duck (or a friend, or even an AI chat like me!). The act of articulating it often reveals the solution.
    *   Google is your friend. Stack Overflow is your friend. The React and Redux documentation are your friends.

7.  **Prioritize Ruthlessly**
    *   What's the *most important* feature to build next? What gives the most value for the effort?
    *   It's easy to get sidetracked by cool but non-essential features. Stick to your core.
    *   A simple, working version is better than a half-finished, complex one.

8.  **Learn as You Go**
    *   This project will teach you a *ton*. Embrace the learning process.
    *   You might not know how to implement rich text editing right now. That's okay. When you get to that feature, you'll research and learn.

9.  **Break Down Complex Problems**
    *   "Implement rich text editing" is a huge task.
    *   Break it down:
        1.  How to make text bold?
        2.  How to store bold formatting in the block's `content` or `properties`?
        3.  How to render bold text?
        4.  How to handle selections?
    *   Smaller, manageable tasks are less daunting.

10. **Test (Even Manually at First)**
    *   After every small change, test it. Does it work as expected? Did it break anything else?
    *   Later, you can explore automated testing, but frequent manual testing is crucial in the early stages.

11. **Don't Aim for Perfection (Initially)**
    *   Get it working, then make it better. "Make it work, make it right, make it fast" (in that order).
    *   Your first implementation of a feature might not be the most elegant or performant. That's fine. You can revisit and refactor once the core functionality is there.

**Your current state:**
You've started with `initialState`, which is a great first step. Now, the challenge is to flesh out the `page_data` (which we're calling `blocks`) into a robust system.

**Mindset for "How should I structure the blocks, in data & load them in page":**

*   **Structure for purpose:** How will this structure help me *render* the block? How will it help me *edit* the block? How will it help me *save* the block?
*   **Minimal viable block:** What's the absolute minimum information a block needs (`id`, `type`, `content`)?
*   **Extensibility:** How can I add new properties or types later without breaking everything? (This is where the `properties` object within a block is useful).
*   **Loading:**
    *   Redux selector gets the array of blocks for the current page.
    *   React component maps over this array.
    *   A "dispatcher" or "renderer" component (like `BlockRenderer`) decides *which* specific block component to render based on `block.type`.

You're essentially building a mini-framework for content. It's a fun challenge! Good luck, and feel free to ask more specific questions as you progress.