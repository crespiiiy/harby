// Tool templates for the Builder7e Tool Creator

const templates = [
  {
    id: 'network-scanner',
    name: 'Network Scanner',
    description: 'A comprehensive network scanning tool that identifies open ports, services, and potential vulnerabilities on target systems.',
    category: 'Reconnaissance',
    difficulty: 'Medium',
    tags: ['network', 'scanning', 'ports', 'services'],
    template: `# Network Scanner Tool

A comprehensive network scanning utility that identifies open ports, running services, and potential vulnerabilities on target systems.

## Features
- Port scanning with customizable ranges
- Service identification
- OS fingerprinting
- Basic vulnerability detection
- Detailed reporting

## Implementation
- Use socket connections for port scanning
- Implement service banner grabbing
- Add timeout and thread management for efficiency
- Include reporting in multiple formats (JSON, CSV, HTML)

## Security Considerations
- Add rate limiting to avoid detection
- Implement proxy support for anonymity
- Include proper error handling for failed connections`,
    files: [
      { name: 'index.js', content: 'Main entry point for the network scanner' },
      { name: 'scanner.js', content: 'Core scanning functionality' },
      { name: 'reporter.js', content: 'Report generation module' },
      { name: 'utils.js', content: 'Utility functions for network operations' },
      { name: 'README.md', content: 'Documentation and usage instructions' }
    ]
  },
  {
    id: 'password-cracker',
    name: 'Password Cracker',
    description: 'A tool for testing password strength through various cracking methods including dictionary attacks, brute force, and rainbow tables.',
    category: 'Password Security',
    difficulty: 'Advanced',
    tags: ['password', 'cracking', 'security', 'hash'],
    template: `# Password Cracking Tool

A tool for testing password strength through various cracking methods including dictionary attacks, brute force, and rainbow tables.

## Features
- Multiple attack methods (dictionary, brute force, hybrid)
- Support for common hash formats (MD5, SHA1, SHA256, bcrypt)
- Customizable character sets and masks
- Performance optimization for GPU acceleration

## Implementation
- Implement efficient hash comparison algorithms
- Add support for wordlist management
- Create rule-based mutation engine
- Include progress tracking and resumable sessions

## Security Considerations
- Add warnings about legal and ethical usage
- Implement rate limiting for online attacks
- Include proper logging for audit purposes`,
    files: [
      { name: 'index.js', content: 'Main entry point for the password cracker' },
      { name: 'cracker.js', content: 'Core cracking algorithms' },
      { name: 'wordlists.js', content: 'Dictionary management' },
      { name: 'hash.js', content: 'Hash identification and processing' },
      { name: 'README.md', content: 'Documentation and ethical usage guidelines' }
    ]
  },
  {
    id: 'packet-analyzer',
    name: 'Packet Analyzer',
    description: 'A tool for capturing and analyzing network packets to inspect traffic patterns, protocols, and potential security issues.',
    category: 'Network Analysis',
    difficulty: 'Medium',
    tags: ['network', 'packets', 'analysis', 'traffic'],
    template: `# Packet Analyzer Tool

A tool for capturing and analyzing network packets to inspect traffic patterns, protocols, and potential security issues.

## Features
- Live packet capture from network interfaces
- Protocol identification and decoding
- Traffic pattern analysis
- Filter capabilities for targeted analysis
- Export functionality for further investigation

## Implementation
- Use libpcap/npcap for packet capture
- Implement protocol parsers for common protocols
- Add statistical analysis for traffic patterns
- Include visualization components for easier understanding

## Security Considerations
- Implement proper privilege handling for capture
- Add encryption for stored captures
- Include anonymization options for sensitive data`,
    files: [
      { name: 'index.js', content: 'Main entry point for the packet analyzer' },
      { name: 'capture.js', content: 'Packet capture functionality' },
      { name: 'protocols.js', content: 'Protocol identification and parsing' },
      { name: 'analyzer.js', content: 'Traffic analysis algorithms' },
      { name: 'README.md', content: 'Documentation and usage instructions' }
    ]
  },
  {
    id: 'web-vulnerability-scanner',
    name: 'Web Vulnerability Scanner',
    description: 'A tool for identifying common web application vulnerabilities such as XSS, SQL injection, and CSRF.',
    category: 'Web Security',
    difficulty: 'Advanced',
    tags: ['web', 'vulnerability', 'scanning', 'injection'],
    template: `# Web Vulnerability Scanner

A tool for identifying common web application vulnerabilities such as XSS, SQL injection, and CSRF.

## Features
- Automated scanning for common vulnerabilities
- Custom payload generation for testing
- Authentication support for protected applications
- Detailed reporting with remediation suggestions

## Implementation
- Create modular architecture for different vulnerability types
- Implement intelligent crawling for application mapping
- Add payload generation for various attack vectors
- Include verification mechanisms to reduce false positives

## Security Considerations
- Add rate limiting to avoid DoS conditions
- Implement proper scope controls
- Include safe mode for non-destructive testing`,
    files: [
      { name: 'index.js', content: 'Main entry point for the vulnerability scanner' },
      { name: 'crawler.js', content: 'Web application crawling and mapping' },
      { name: 'scanner.js', content: 'Vulnerability detection modules' },
      { name: 'payloads.js', content: 'Test payload generation and management' },
      { name: 'reporter.js', content: 'Report generation with remediation advice' },
      { name: 'README.md', content: 'Documentation and ethical usage guidelines' }
    ]
  },
  {
    id: 'encryption-tool',
    name: 'Encryption Tool',
    description: 'A utility for encrypting and decrypting data using various algorithms with key management capabilities.',
    category: 'Cryptography',
    difficulty: 'Medium',
    tags: ['encryption', 'cryptography', 'security', 'privacy'],
    template: `# Encryption Tool

A utility for encrypting and decrypting data using various algorithms with key management capabilities.

## Features
- Support for multiple encryption algorithms (AES, RSA, ChaCha20)
- Key generation and management
- File and text encryption
- Secure key storage options

## Implementation
- Use established cryptographic libraries
- Implement proper key derivation functions
- Add secure random number generation
- Include integrity verification for encrypted data

## Security Considerations
- Implement memory protection for sensitive data
- Add key rotation capabilities
- Include secure deletion options for temporary files`,
    files: [
      { name: 'index.js', content: 'Main entry point for the encryption tool' },
      { name: 'crypto.js', content: 'Core cryptographic operations' },
      { name: 'keys.js', content: 'Key generation and management' },
      { name: 'utils.js', content: 'Utility functions for file handling and conversion' },
      { name: 'README.md', content: 'Documentation and usage instructions' }
    ]
  }
];

export default templates;