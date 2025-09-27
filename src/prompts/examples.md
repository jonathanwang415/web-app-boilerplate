# Example Prompts for Common Tasks

Ready-to-use prompts for common development tasks in the web application boilerplate.

## 🎨 UI Component Examples

### Create a Modal Component

```
Create a modal component using Radix UI Dialog following the established patterns:

Requirements:
- Use @radix-ui/react-dialog as base
- Style with Tailwind CSS
- Include proper TypeScript types
- Use the cn() utility for conditional classes
- Export as both default and named export
- Include proper accessibility features

The modal should:
- Support different sizes (sm, md, lg, xl)
- Include close button and backdrop click to close
- Support custom content and actions
- Be fully accessible with proper ARIA attributes
- Include loading states

Example usage:
<Modal size="md" title="Confirm Action">
  <ModalContent>
    Are you sure you want to delete this item?
  </ModalContent>
  <ModalActions>
    <Button variant="outline">Cancel</Button>
    <Button variant="destructive">Delete</Button>
  </ModalActions>
</Modal>
```

### Create a Data Table Component

```
Create a data table component with sorting, filtering, and pagination:

Requirements:
- Use Radix UI Table primitives
- Style with Tailwind CSS
- Include proper TypeScript generics
- Support sorting by columns
- Include search/filter functionality
- Add pagination controls
- Use the established component patterns

The table should:
- Accept generic data types
- Support column configuration
- Include sorting indicators
- Provide search functionality
- Show pagination controls
- Be fully responsive
- Include loading and empty states

Example usage:
<DataTable
  data={users}
  columns={userColumns}
  searchable
  sortable
  pagination={{ pageSize: 10 }}
  onRowClick={(user) => navigate(`/users/${user.id}`)}
/>
```

### Create a Form Component

```
Create a reusable form component with validation:

Requirements:
- Use React Hook Form for form management
- Integrate with Zod for validation
- Style with Tailwind CSS
- Include proper TypeScript types
- Support different input types
- Use the established validation patterns

The form should:
- Support various input types (text, email, password, select, etc.)
- Include real-time validation
- Show validation errors
- Support custom validation rules
- Include loading and submit states
- Be fully accessible

Example usage:
<Form
  schema={userSchema}
  onSubmit={handleSubmit}
  defaultValues={user}
>
  <FormField name="name" label="Full Name" required />
  <FormField name="email" type="email" label="Email" required />
  <FormField name="role" type="select" options={roleOptions} />
  <FormActions>
    <Button type="submit">Save User</Button>
  </FormActions>
</Form>
```

## 🔌 API Route Examples

### Create CRUD API Route

```
Create a complete CRUD API route for [Entity] following the established patterns:

Requirements:
- Use proper HTTP methods (GET, POST, PUT, DELETE)
- Validate input with Zod schemas
- Return consistent API response format
- Handle errors gracefully
- Use the established database patterns
- Include proper TypeScript types

The route should handle:
- GET /api/[entity] - List all entities with pagination
- GET /api/[entity]/[id] - Get single entity
- POST /api/[entity] - Create new entity
- PUT /api/[entity]/[id] - Update entity
- DELETE /api/[entity]/[id] - Delete entity

Example response format:
{
  "success": true,
  "data": { ... },
  "pagination": { page: 1, limit: 10, total: 100 }
}

Include proper error handling and validation for all endpoints.
```

### Create Search API Route

```
Create a search API route with advanced filtering:

Requirements:
- Support text search across multiple fields
- Include filtering by categories/tags
- Add sorting options
- Implement pagination
- Use database indexing for performance
- Cache search results in Redis

The search should:
- Support full-text search
- Include faceted filtering
- Provide sorting options
- Return paginated results
- Cache frequently searched terms
- Include search suggestions

Example usage:
GET /api/search?q=react&category=frontend&sort=relevance&page=1&limit=10

Response should include:
- Search results
- Facet counts
- Search suggestions
- Pagination info
```

## 🗄️ Database Examples

### Create Complex Query

```
Create a complex database query for [specific use case]:

Requirements:
- Use prepared statements for security
- Include proper joins and relationships
- Add appropriate indexes
- Implement pagination
- Use Redis caching for performance
- Follow the established database patterns

The query should:
- Join multiple tables efficiently
- Support filtering and sorting
- Include pagination
- Use proper indexes
- Cache results appropriately
- Handle edge cases

Example: Get users with their latest posts and comment counts, filtered by date range, sorted by activity.
```

### Create Database Migration

```
Create a database migration for [specific change]:

Requirements:
- Update the initializeTables function
- Include proper indexes
- Handle foreign key constraints
- Consider data migration
- Use proper SQL syntax
- Test the migration

The migration should:
- Add new tables/columns safely
- Create appropriate indexes
- Handle foreign key relationships
- Include data migration if needed
- Be reversible if possible
- Include proper error handling

Example: Add a posts table with user relationships and proper indexing.
```

## 🧪 Testing Examples

### Test API Route

```
Create comprehensive tests for the [endpoint] API route:

Requirements:
- Test all HTTP methods
- Test authentication and authorization
- Test input validation
- Test error handling
- Mock external dependencies
- Use proper test data

The tests should cover:
- Successful requests
- Authentication failures
- Validation errors
- Database errors
- Edge cases
- Performance considerations

Example test structure:
- describe('GET /api/users')
- describe('POST /api/users')
- describe('Authentication')
- describe('Validation')
- describe('Error Handling')
```

### Test React Component

```
Create comprehensive tests for the [ComponentName] component:

Requirements:
- Test component rendering
- Test user interactions
- Test accessibility features
- Test responsive behavior
- Test error states
- Use React Testing Library

The tests should cover:
- Component rendering
- User interactions (clicks, form submission)
- Accessibility (ARIA attributes, keyboard navigation)
- Responsive behavior
- Error and loading states
- Integration with other components

Example test structure:
- describe('Component Rendering')
- describe('User Interactions')
- describe('Accessibility')
- describe('Error States')
```

## 🔧 Development Examples

### Add Environment Configuration

```
Add new environment variables and configuration:

Requirements:
- Update env.example file
- Add validation for new variables
- Update constants/index.ts
- Add proper TypeScript types
- Document the new configuration
- Test the configuration

The configuration should:
- Include proper validation
- Have sensible defaults
- Be properly typed
- Include documentation
- Support different environments
- Be secure

Example: Add SMTP configuration for email functionality.
```

### Add New Development Script

```
Add a new npm script for [specific purpose]:

Requirements:
- Follow naming conventions
- Include proper error handling
- Use appropriate tools
- Document the script
- Test the script
- Consider cross-platform compatibility

The script should:
- Have clear purpose and usage
- Include proper error handling
- Provide helpful output
- Be well documented
- Work across platforms
- Integrate with existing workflow

Example: Add a script to seed the database with test data.
```

## 📚 Documentation Examples

### Document New Feature

```
Create comprehensive documentation for the [feature name]:

Requirements:
- Update README.md
- Add API documentation
- Include usage examples
- Document configuration options
- Add troubleshooting section
- Keep documentation current

The documentation should include:
- Feature overview and purpose
- Installation and setup instructions
- Configuration options
- Usage examples with code
- API reference
- Troubleshooting guide
- Links to related features

Example: Document the new authentication system with examples.
```

### Create Component Documentation

```
Create detailed documentation for the [ComponentName] component:

Requirements:
- Document all props and their types
- Include usage examples
- Show different variants
- Document accessibility features
- Include best practices
- Add interactive examples

The documentation should include:
- Component overview
- Props documentation with types
- Usage examples
- Variant demonstrations
- Accessibility notes
- Best practices
- Common use cases

Example: Document a Button component with all variants and usage examples.
```
