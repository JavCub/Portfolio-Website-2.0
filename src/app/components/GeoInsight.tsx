import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Bot, FileCode2, Sparkles } from 'lucide-react';

export function GeoInsight() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const bots = [
    { name: 'OpenAI', agents: 'GPTBot, OAI-SearchBot' },
    { name: 'Google', agents: 'Google-Extended' },
    { name: 'Anthropic', agents: 'Anthropic-ai, ClaudeBot' },
    { name: 'Perplexity', agents: 'PerplexityBot' },
    { name: 'Meta', agents: 'FacebookBot' },
  ];

  return (
    <section ref={ref} className="py-20 bg-[#EDF1F5]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={{ backgroundColor: '#14234B' }}
        >
          {/* Top Bar of the "Terminal" */}
          <div className="flex items-center px-6 py-4 border-b border-white/10" style={{ backgroundColor: '#0A142F' }}>
            <div className="flex gap-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50 font-mono">
              <FileCode2 size={16} />
              <span>robots.txt — Generative Engine Optimization</span>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
            
            {/* Text Explanation */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0259DD]/20 text-[#0259DD] mb-6">
                <Sparkles size={16} />
                <span className="text-sm font-medium tracking-wide uppercase">Technical Insight</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-futura font-thin text-white mb-6">
                Why GEO Matters
              </h3>
              
              <p className="text-white/80 leading-relaxed mb-6 font-polymath text-lg">
                Generative Engine Optimization (GEO) relies on configuring your <code className="bg-white/10 px-2 py-1 rounded text-[#FF6648]">robots.txt</code> file to allow Large Language Models (LLMs) and AI search engines to access and crawl your site.
              </p>
              <p className="text-white/80 leading-relaxed font-polymath text-lg">
                If major AI crawlers are blocked, your content cannot be indexed for AI-driven search or synthesis. To ensure your brand and content appear in AI-generated answers, you must explicitly permit specific AI crawlers.
              </p>
            </div>

            {/* Code Snippet Block */}
            <div className="bg-[#0A142F] rounded-xl p-6 font-mono text-sm shadow-inner border border-white/5">
              <div className="flex items-center gap-2 mb-4 text-[#FF6648]">
                <Bot size={20} />
                <span className="font-semibold">Key AI User-Agents to Allow:</span>
              </div>
              
              <ul className="space-y-4">
                {bots.map((bot, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex flex-col border-l-2 border-[#0259DD] pl-4"
                  >
                    <span className="text-white font-bold">{bot.name}</span>
                    <span className="text-[#0259DD]">{bot.agents}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
