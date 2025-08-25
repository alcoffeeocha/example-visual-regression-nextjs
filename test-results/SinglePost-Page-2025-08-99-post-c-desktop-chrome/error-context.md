# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - article [ref=e3]:
      - heading "Post C" [level=1] [ref=e4]
      - generic [ref=e5]:
        - paragraph [ref=e6]: Main content of Post C with some longer text that spans multiple lines to make layout differences more obvious
        - generic [ref=e7]:
          - button "Apply Now!" [ref=e8] [cursor=pointer]
          - button "Share" [ref=e9] [cursor=pointer]
        - paragraph [ref=e10]: Published on Aug 99, 2025
    - link "← Back" [ref=e11] [cursor=pointer]:
      - /url: /
  - alert [ref=e12]
```