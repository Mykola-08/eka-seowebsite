'use client';

import { Component, ReactNode, ErrorInfo } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Refresh01Icon, Home01Icon, Alert01Icon } from '@/lib/icons';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    
    // In production, you might want to send this to an error reporting service
    // logErrorToService(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-muted/50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl max-w-md w-full p-8 text-center">
            <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-destructive" />
            </div>
            
            <h1 className="text-2xl font-medium text-foreground mb-4">
              Ups! Alguna cosa ha anat malament
            </h1>
            
            <p className="text-foreground/80 mb-8">
              Ho sentim, s'ha produït un error inesperat. Prova de recarregar la pàgina o torna a l'inici.
            </p>

            {this.state.error && process.env.NODE_ENV === 'development' && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground/80 font-medium">
                  Detalls de l&apos;error
                </summary>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="font-mono text-sm font-medium text-destructive mb-2">
                    {this.state.error.name}: {this.state.error.message}
                  </p>
                  <pre className="text-xs text-foreground/80 whitespace-pre-wrap overflow-auto max-h-60">
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              </details>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={this.handleRetry}
                variant="default"
                className="w-full sm:w-auto"
              >
                <Refresh01Icon className="w-4 h-4 mr-2" />
                Tornar a intentar
              </Button>
              
              <Button
                onClick={() => window.location.href = '/'}
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Home01Icon className="w-4 h-4 mr-2" />
                Anar a l'inici
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Simple error fallback component
export function ErrorFallback({ 
  error, 
  resetError 
}: { 
  error: Error; 
  resetError: () => void; 
}) {
  return (
    <div className="p-8 bg-destructive/5 rounded-2xl">
      <div className="flex items-center mb-4">
        <Alert01Icon className="w-6 h-6 text-destructive mr-3" />
        <h2 className="text-lg font-medium text-foreground">
          Error en aquesta secció
        </h2>
      </div>
      
      <p className="text-destructive mb-4">
        S'ha produït un error en aquesta part de l'aplicació.
      </p>
      
      <Button
        onClick={resetError}
        variant="destructive"
        size="sm"
      >
        Tornar a intentar
      </Button>
      
      {process.env.NODE_ENV === 'development' && (
        <details className="mt-4">
          <summary className="cursor-pointer text-sm text-destructive">
            Detalls de l'error
          </summary>
          <pre className="mt-2 text-xs text-destructive whitespace-pre-wrap">
            {error.message}
          </pre>
        </details>
      )}
    </div>
  );
}
