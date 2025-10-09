// @ts-nocheck
/**
 * Component: ErrorBoundary
 * Author: AR
 * Created: 2025-10-08
 * Modified: 2025-10-08 by AR
 * Description: Error boundary wrapper for pages.
 */
'use client';
import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode; // Wrapped subtree
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, { hasError: boolean }> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <div className="p-6">Something went wrong.</div>;
    return this.props.children;
  }
}


