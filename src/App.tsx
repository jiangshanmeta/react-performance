import { Section } from "./components/Section";
import { ComponentsAsProps } from "./demos/ComponentsAsProps";
import { ContextComponentsAaProps } from "./demos/ContextComponentsAaProps";
import { ContextHOC } from "./demos/ContextHOC";
import { ContextNaive } from "./demos/ContextNaive";
import { ContextProviderValueChange } from "./demos/ContextProviderValueChange";
import { ContextUseMemo } from "./demos/ContextUseMemo";
import { FragileMemo } from "./demos/FragileMemo";
import { FragileMemoFixByUseMemo } from "./demos/FragileMemoFixByUseMemo";
import { KeyBestSolution, KeyNaive, WithKey } from "./demos/Key1";
import { MemoStart } from "./demos/MemoStart";
import { StartDemo } from "./demos/StartDemo";
import { StateDown } from "./demos/StateDown";

function App() {
  return (
    <div >
      <Section title="Initial Code" >
        <StartDemo />
      </Section>

      <Section title="Moving State Down" >
        <StateDown />
      </Section>

      <Section title="React.memo">
        <MemoStart />
      </Section>

      <Section title="Fragile React.memo">
        <FragileMemo />
      </Section>

      <Section title="Fragile React.memo fixed by useMemo">
        <FragileMemoFixByUseMemo />
      </Section>

      <Section title="Components as Props">
        <ComponentsAsProps />
      </Section>

      <Section title="key naive">
        <KeyNaive />
      </Section>

      <Section title="With key">
        <WithKey />
      </Section>

      <Section title="key case best solution">
        <KeyBestSolution />
      </Section>

      <Section title="Context Naive Case">
        <ContextNaive />
      </Section>

      <Section title="Context with Components as Props">
        <ContextComponentsAaProps />
      </Section>

      <Section title="Context Provider value change ">
        <ContextProviderValueChange />
      </Section>

      <Section title="Context useMemo">
        <ContextUseMemo />
      </Section>

      <Section title="Context memo HOC">
        <ContextHOC />
      </Section>
    </div>
  );
}

export default App;
