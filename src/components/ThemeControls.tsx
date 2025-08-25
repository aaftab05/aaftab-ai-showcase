import { useState, useEffect } from 'react';
import { Palette, Grid, EyeOff, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeControls = () => {
  const [currentTheme, setCurrentTheme] = useState('main');
  const [isPlainBg, setIsPlainBg] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isControlsOpen, setIsControlsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'main';
    const savedPlainBg = localStorage.getItem('portfolio-plain-bg') === 'true';
    const savedReducedMotion = localStorage.getItem('portfolio-reduced-motion') === 'true';
    
    setCurrentTheme(savedTheme);
    setIsPlainBg(savedPlainBg);
    setIsReducedMotion(savedReducedMotion);
    
    applyTheme(savedTheme);
    applyPlainBg(savedPlainBg);
    applyReducedMotion(savedReducedMotion);
  }, []);

  const applyTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
  };

  const applyPlainBg = (plain: boolean) => {
    document.documentElement.classList.toggle('plain-bg', plain);
  };

  const applyReducedMotion = (reduced: boolean) => {
    document.documentElement.classList.toggle('reduced-motion', reduced);
  };

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem('portfolio-theme', theme);
    applyTheme(theme);
  };

  const handlePlainBgToggle = () => {
    const newValue = !isPlainBg;
    setIsPlainBg(newValue);
    localStorage.setItem('portfolio-plain-bg', newValue.toString());
    applyPlainBg(newValue);
  };

  const handleReducedMotionToggle = () => {
    const newValue = !isReducedMotion;
    setIsReducedMotion(newValue);
    localStorage.setItem('portfolio-reduced-motion', newValue.toString());
    applyReducedMotion(newValue);
  };

  const handlePrint = () => {
    window.print();
  };

  const themes = [
    { id: 'main', name: 'Main', color: '#1F2A44' },
    { id: 'cool', name: 'Cool', color: '#1A2B3D' },
    { id: 'warm', name: 'Warm', color: '#2D1B3D' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 no-print">
      {/* Controls Panel */}
      {isControlsOpen && (
        <div className="mb-4 bg-card/95 backdrop-blur-lg border border-border rounded-lg shadow-strong p-4 w-64 animate-scale-in">
          {/* Theme Selector */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Color Palette
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => handleThemeChange(theme.id)}
                  className={`p-2 rounded-lg border-2 transition-all duration-200 ${
                    currentTheme === theme.id 
                      ? 'border-secondary shadow-medium' 
                      : 'border-border hover:border-secondary/50'
                  }`}
                >
                  <div 
                    className="w-6 h-6 rounded-full mx-auto mb-1"
                    style={{ backgroundColor: theme.color }}
                  />
                  <span className="text-xs font-medium">{theme.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Background Toggle */}
          <div className="mb-4">
            <button
              onClick={handlePlainBgToggle}
              className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                isPlainBg 
                  ? 'border-secondary bg-secondary/10' 
                  : 'border-border hover:border-secondary/50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Grid className="w-4 h-4" />
                <span className="text-sm font-medium">Plain Background</span>
              </div>
              <div className={`w-4 h-4 rounded ${isPlainBg ? 'bg-secondary' : 'bg-muted'}`} />
            </button>
          </div>

          {/* Reduced Motion Toggle */}
          <div className="mb-4">
            <button
              onClick={handleReducedMotionToggle}
              className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                isReducedMotion 
                  ? 'border-secondary bg-secondary/10' 
                  : 'border-border hover:border-secondary/50'
              }`}
            >
              <div className="flex items-center gap-2">
                <EyeOff className="w-4 h-4" />
                <span className="text-sm font-medium">Reduced Motion</span>
              </div>
              <div className={`w-4 h-4 rounded ${isReducedMotion ? 'bg-secondary' : 'bg-muted'}`} />
            </button>
          </div>

          {/* Print Button */}
          <Button
            onClick={handlePrint}
            variant="outline"
            size="sm"
            className="w-full justify-start"
          >
            <Printer className="w-4 h-4 mr-2" />
            Print Portfolio
          </Button>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsControlsOpen(!isControlsOpen)}
        size="lg"
        className="w-14 h-14 rounded-full bg-gradient-secondary hover:shadow-medium transition-all duration-300 shadow-strong"
        aria-label="Theme controls"
      >
        <Palette className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default ThemeControls;