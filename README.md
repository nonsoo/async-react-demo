# Async React Demo

This Demo provides an example of what an async react application looks and feels like. Take time to explore the codebase, and launch the demo as well!

## Context

Async first means building applications where we use declarative tools to express user intent, loading, priority, and visual continuity. This allows React to treat rendering as a schedulable, and interruptible operation that React itself coordinates.

This means that we are defining a contract with the user; when the user acts immediately, the UI should respond immediately while some asynchronous work is done in the background. When the data is ready and no other higher priority work is to be done then we can show the completed state in a coordinated operation.

Taken together, this process looks something like our Instagram-like demo below. Let’s see how the interactions behave when we render the view, like/dislike a post, archive/unarchive a post, and switch tabs. Press Render view to begin!

Did you try mixing up the interactions? How did the experience change when you archived a post and then switched tabs immediately?

This demo is built using async first principles! We're using a combination of optimistic states, transitions, suspense, and activity to craft this experience. You may have noticed that switching tabs was pretty instantaneous; however, when we archived a post and then switched tabs immediately, we optimistically switched to the archive tab and showed a loading indicator within the tab viewer. Since the render for the archive tab wasn't ready yet, React kept the experience within the feed tab. Once the async work resolved with it's data, React could fully switch to the archive tab showing all updated archived posts.

The important thing here is that all of this coordination is handled by React and we are just defining how these interactions should look. There is no useEffect within this demo that handles any of the async work!
