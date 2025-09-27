# Development Workflow Prompts

Prompts for development tasks, code generation, and workflow optimization.

## 🏗️ Component Generation

### Create a New UI Component

```
Create a new [ComponentName] component in src/components/ui/ following the established patterns:

Requirements:
- Use Radix UI primitives as base
- Style with Tailwind CSS classes
- Include proper TypeScript types
- Use the cn() utility for conditional classes
- Export as both default and named export
- Include forwardRef if needed
- Follow the existing component structure

Component should be:
- [specific requirements]
- [accessibility features]
- [responsive behavior]

Example usage:
[provide example if needed]
```

### Create a Layout Component

```
Create a new layout component in src/components/layout/ for [purpose]:

Requirements:
- Follow the existing header/footer pattern
- Use container classes for proper alignment
- Include responsive design
- Use proper semantic HTML
- Include TypeScript types

The component should:
- [specific layout requirements]
- [responsive breakpoints]
- [accessibility considerations]
```

## 🔌 API Route Development

### Create a New API Route

```
Create a new API route at /api/[endpoint] following the established patterns:

Requirements:
- Use proper HTTP status codes from constants
- Validate input with Zod schemas
- Return consistent API response format
- Handle errors gracefully with try-catch
- Use the established database patterns
- Include proper TypeScript types

The route should:
- [specific functionality]
- [authentication requirements]
- [validation rules]
- [response format]

Example request/response:
[provide examples]
```

### Add Authentication to API Route

```
Add authentication middleware to the [endpoint] API route:

Requirements:
- Use the withAuth wrapper from middleware/auth.ts
- Handle authentication errors properly
- Access user data from request.user
- Maintain existing functionality
- Follow the established auth patterns

The authenticated route should:
- [specific auth requirements]
- [user data access]
- [permission checks]
```

## 🗄️ Database Operations

### Create Database Query

```
Create a database query for [operation] using the established patterns:

Requirements:
- Use prepared statements for security
- Implement proper error handling
- Consider Redis caching for frequently accessed data
- Follow the established schema patterns
- Use proper TypeScript types

The query should:
- [specific data requirements]
- [performance considerations]
- [caching strategy]
- [error handling]
```

### Add Database Migration

```
Add a database migration for [change description]:

Requirements:
- Update the initializeTables function in src/database/sqlite.ts
- Include proper indexes
- Handle foreign key constraints
- Use proper SQL syntax
- Consider data migration if needed

The migration should:
- [specific schema changes]
- [index requirements]
- [constraint handling]
```

## 🧪 Testing

### Create Component Test

```
Create a test for the [ComponentName] component using React Testing Library:

Requirements:
- Test component rendering
- Test user interactions
- Test accessibility features
- Test responsive behavior
- Use proper test data and fixtures
- Follow the established testing patterns

The test should cover:
- [specific test cases]
- [user interaction scenarios]
- [edge cases]
```

### Create API Route Test

```
Create a test for the [endpoint] API route:

Requirements:
- Test successful requests
- Test error handling
- Test authentication
- Test validation
- Mock external dependencies
- Use proper test data

The test should cover:
- [specific test scenarios]
- [error conditions]
- [authentication cases]
```

## 🔧 Development Tools

### Add New Script

```
Add a new npm script for [purpose] to package.json:

Requirements:
- Follow the established naming convention
- Include proper error handling
- Use appropriate tools (tsx, node, etc.)
- Document the script purpose
- Consider cross-platform compatibility

The script should:
- [specific functionality]
- [error handling]
- [output format]
```

### Update ESLint Rules

```
Update ESLint configuration for [purpose]:

Requirements:
- Maintain existing rules
- Add new rules as needed
- Ensure compatibility with TypeScript
- Test the configuration
- Document rule changes

The update should:
- [specific rule changes]
- [compatibility considerations]
- [testing requirements]
```

## 📚 Documentation

### Update README

```
Update the README.md for [new feature/change]:

Requirements:
- Maintain existing structure
- Include code examples
- Update installation instructions if needed
- Add new API endpoints to documentation
- Keep documentation current and accurate

The update should include:
- [specific documentation needs]
- [code examples]
- [usage instructions]
```

### Create Component Documentation

```
Create documentation for the [ComponentName] component:

Requirements:
- Include usage examples
- Document all props and their types
- Show different variants/states
- Include accessibility notes
- Provide code examples

The documentation should cover:
- [component purpose]
- [prop documentation]
- [usage examples]
- [accessibility features]
```
