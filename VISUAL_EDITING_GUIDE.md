# Visual Editing Implementation Guide

This Payload CMS e-commerce template now includes comprehensive visual editing capabilities that allow content editors to edit pages directly in the frontend preview.

## ✨ Features Implemented

### 1. **Live Preview System**
- Real-time preview updates without page refresh
- Draft mode detection and management
- Live preview listener for seamless editing experience

### 2. **Visual Editing Wrapper**
- Hover effects to highlight editable blocks
- Visual indicators showing block types
- Click-to-edit functionality
- Inline editing support for text content

### 3. **Visual Editing Toolbar**
- Floating toolbar with editing controls
- Quick access to admin panel
- Draft mode toggle
- Add block functionality
- Save and exit preview options

### 4. **Enhanced Blocks**
- All content blocks wrapped with visual editing capabilities
- Individual column editing in Content blocks
- Separate editing for CTA content and links
- Data attributes for precise content targeting

### 5. **API Endpoints**
- `/api/preview` - Enable draft mode
- `/api/exit-preview` - Disable draft mode
- `/api/draft-mode-status` - Check current draft status

## 🚀 How to Use Visual Editing

### For Content Editors:

1. **Enter Preview Mode:**
   - Go to any page in the Payload admin panel
   - Click the "Live Preview" tab or button
   - The page will open in preview mode with visual editing enabled

2. **Edit Content:**
   - Hover over any content block to see editing boundaries
   - Click on blocks to open them in the admin panel
   - Use the floating toolbar for quick actions

3. **Visual Indicators:**
   - Blue dashed outline appears on hover
   - Block type labels show what content you're editing
   - Different cursor styles for different edit types

4. **Exit Preview:**
   - Click the eye-off icon in the floating toolbar
   - Or navigate away from the preview URL

### For Developers:

#### Adding Visual Editing to New Blocks:

```tsx
import { VisualEditingWrapper } from '@/components/VisualEditingWrapper'

export const YourBlock = (props) => {
  return (
    <VisualEditingWrapper
      blockType="your-block-type"
      blockId={props.id}
      field="layout"
      isInlineEditable={false} // true for text content
    >
      {/* Your block content */}
    </VisualEditingWrapper>
  )
}
```

#### Customizing Visual Editing Styles:

Edit `/src/styles/visual-editing.css` to modify:
- Hover effects and outlines
- Block labels and positioning
- Dark mode support
- Responsive behavior

#### API Integration:

```typescript
// Check draft mode status
const response = await fetch('/api/draft-mode-status')
const { isEnabled } = await response.json()

// Enable preview mode
window.location.href = '/api/preview?slug=your-page&locale=en'

// Exit preview mode
await fetch('/api/exit-preview')
```

## 📁 File Structure

```
src/
├── components/
│   ├── VisualEditingWrapper/         # Main wrapper component
│   ├── VisualEditingToolbar/         # Floating toolbar
│   └── LivePreviewListener/          # Real-time updates
├── app/
│   └── api/
│       ├── preview/                  # Enable draft mode
│       ├── exit-preview/             # Disable draft mode
│       └── draft-mode-status/        # Check draft status
├── blocks/
│   ├── RenderBlocks.tsx              # Enhanced with visual editing
│   ├── Content/Component.tsx         # Visual editing enabled
│   └── CallToAction/Component.tsx    # Visual editing enabled
└── styles/
    └── visual-editing.css            # Visual editing styles
```

## 🎨 Customization Options

### Visual Styling:
- Modify outline colors and styles in CSS
- Adjust hover effects and transitions
- Customize block labels and positioning
- Add animations and micro-interactions

### Functionality:
- Add more toolbar actions
- Implement drag-and-drop block reordering
- Create inline text editing
- Add keyboard shortcuts

### Integration:
- Connect to external CMS features
- Add collaboration features
- Implement version control
- Create audit trails

## 🔧 Configuration

### Environment Variables:
```env
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
PAYLOAD_SECRET=your-secret-key
```

### Payload Config:
The live preview is already configured in `payload.config.ts` with:
- Breakpoint definitions for responsive preview
- URL generation for preview links
- Draft mode integration

## 🐛 Troubleshooting

### Common Issues:

1. **Visual editing not appearing:**
   - Ensure you're in draft mode
   - Check browser console for JavaScript errors
   - Verify API routes are working

2. **Toolbar not showing:**
   - Confirm draft mode is enabled
   - Check CSS is properly imported
   - Verify component imports

3. **Live preview not updating:**
   - Check LivePreviewListener is imported
   - Verify Payload live preview configuration
   - Ensure draft mode is properly enabled

### Debug Mode:
Add `data-debug="true"` to any VisualEditingWrapper to log editing events to the console.

## 🚀 Next Steps

Consider adding these advanced features:
- Drag-and-drop block reordering
- Inline rich text editing
- Real-time collaboration
- Version history and rollback
- A/B testing capabilities
- Performance analytics integration

## 📚 Resources

- [Payload CMS Live Preview Docs](https://payloadcms.com/docs/live-preview)
- [Next.js Draft Mode](https://nextjs.org/docs/app/building-your-application/configuring/draft-mode)
- [Visual Editing Best Practices](https://payloadcms.com/blog/visual-editing-best-practices)